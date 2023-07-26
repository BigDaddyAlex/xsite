import { Button, Card, Divider, Heading, Radio, RadioGroupField, View } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import questions from './questions'

const mapping = new Map<string, number>([
  ["a", 0],
  ["b", 1],
  ["c", 2],
  ["d", 3]
]);
export default (props: any) => {

  const [userAnswer, setuserAnswer] = useState<number>(-1);
  const [reveal, setReveal] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  useEffect(() => {
    if (userAnswer > -1) {
      if (mapping.get(questions[questionIndex].answer) === userAnswer) {
        setReveal("Correct!")
      } else {
        setReveal("Incorrect. The correct answer is " + questions[questionIndex].answer)
      }
    }
  }, [userAnswer]);

  return <Card className='d-flex flex-column'
    key="key"
    borderRadius="medium"
    maxWidth="100rem"
    variation="outlined"
  >
    <View padding="xs" >
      <RadioGroupField
        label={questions[questionIndex].question}
        name="language"
        onChange={(e) => {setuserAnswer(+e.target.value)
        setSelectedValue(e.target.value)}}
        value={selectedValue}
      >
        {questions[questionIndex].choices.map((choice: any, index: number) => (
          <Radio value={index.toString()}>{choice}</Radio>
        ))}
      </RadioGroupField>
      <Divider padding="xs" />
      <div className='text-black'>
        {reveal}
      </div>
      <br />
      <Button onClick={() => {
        if (questionIndex > 0)
          setQuestionIndex(questionIndex - 1)
        setReveal("")
        setSelectedValue("")
      }}>Previous</Button>
      <Button onClick={() => {
        if (questionIndex < questions.length - 1)
          setQuestionIndex(questionIndex + 1)
        setReveal("")
        setSelectedValue("")
      }}>Next</Button>

    </View>
  </Card>
}