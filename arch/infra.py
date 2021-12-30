from diagrams import Diagram
from diagrams.azure.compute import FunctionApps
from diagrams.azure.database import CosmosDb
from diagrams.azure.web import AppServices

with Diagram("Infrastructure", show=False):
    (
        AppServices("Static Web App")
        >> FunctionApps(
            """
        Function App 
        w/ HTTP 
        Trigger"""
        )
        >> CosmosDb("CosmosDB (SQL)")
    )
