' Delete the reservation based on the parameter that is passed in
' Only one passed-in parameter should be non-empty
' For example, if  PassengerName = John then this action will search for that passenger
' and delete the first returned row with PassengerName = John

a=Parameter("OrderNumber")
b=Parameter("PassengerName")
c=Parameter("OrderDate")

RunAction "500-SearchOrderNum", oneIteration, Parameter("OrderNumber"), Parameter("PassengerName"), Parameter("OrderDate")
RunAction "700-TrashcanOrder", oneIteration
