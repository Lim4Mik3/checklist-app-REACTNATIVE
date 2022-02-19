import Realm from 'realm'

import { ChecklistSchema } from './Schemas/Checklist';

export default function connectRealm() {
  return Realm.open({
    schema: [ChecklistSchema],
    schemaVersion: 2
  })
}