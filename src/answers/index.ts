import { getHint } from '../logic'
import { answers } from './list'

export function getAnswerOfDay(day: number) {
  console.log(answers)
  const [word = '', hint = ''] = answers[day] || []
  console.log('ddd', day)
  console.log({
    word,
    hint: hint || getHint(word),
  })
  return {
    word,
    hint: hint || getHint(word),
  }
}
