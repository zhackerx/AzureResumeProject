using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Text;
using System.Net.Http;

namespace Company.Function
{
    public static class GetVisit
    {
        [FunctionName("GetVisit")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [CosmosDB(databaseName:"AzureResume",collectionName:"counter",ConnectionStringSetting ="AzureConnectionStrings",Id ="1",PartitionKey ="1")] counter counter,
            [CosmosDB(databaseName:"AzureResume",collectionName:"counter",ConnectionStringSetting ="AzureConnectionStrings",Id ="1",PartitionKey ="1")] out counter updatedcounter,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            updatedcounter = counter;
            updatedcounter.count += 1;
            var jsontoreturn = JsonConvert.SerializeObject(counter);
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK){
                Content = new StringContent(jsontoreturn, Encoding.UTF8 , "application/json")
            };
        }
    }
}
