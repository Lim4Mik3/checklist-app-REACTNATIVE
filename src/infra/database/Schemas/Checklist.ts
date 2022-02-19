import { ObjectSchema } from 'realm'

export const ChecklistSchema: ObjectSchema = {
  name: 'Checklist',
  primaryKey: 'id',
  properties: {
    id: { type: 'string', indexed: true },
    type: 'string',
    amount_of_milk_produced: 'int',
    number_of_cows_head: 'int',
    had_supervision: 'bool',
    farm_name: 'string',
    farm_city: 'string',
    farmer_name: 'string',
    supervisor_name: 'string?',
    is_sync: 'bool',
    action_type: 'string',
    created_at: 'string',
    updated_at: 'string?'
  }
}
