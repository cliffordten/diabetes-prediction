export interface QuestionModel{
  id:Number
  title: String
  question:String
  tag:String
  date:String
  time:String
  name:String
}

export interface AskQuestionModel{
  title: String
  question:String
  tag:String
}

export interface ResponseModel{
  response:String
  date:String
  time:String
  name:String
}
