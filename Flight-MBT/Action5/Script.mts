' Delete the OrderNumber parameter that is passed in
' This could be adjusted with logic to delete by Name or Date if needed

'a=Parameter("OrderNumber")
'b=Parameter("Name")
'c=Parameter("Date")

RunAction "300-SearchOrderNum", oneIteration, Parameter("OrderNumber")
RunAction "500-TrashcanOrder", oneIteration
