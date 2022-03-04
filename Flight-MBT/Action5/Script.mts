' Delete the OrderNumber parameter that is passed in
' This could be adjusted with logic to delete by Name or Date if needed

a=Parameter("OrderNumber")
b=Parameter("PassengerName")
c=Parameter("OrderDate")

RunAction "500-SearchOrderNum", oneIteration, Parameter("OrderNumber"), Parameter("PassengerName"), Parameter("OrderDate")
RunAction "700-TrashcanOrder", oneIteration
