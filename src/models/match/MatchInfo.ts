import Participants from './Participants'

type MatchInfo = {
  id: number
  sports: string
  maxNumberOfParticipants: number
  place: string
  title: string
  content: string
  startTime: string
  applyTime: string
  participants: Participants[]
  gender: string
  numberOfPlayer: number
}

export default MatchInfo
