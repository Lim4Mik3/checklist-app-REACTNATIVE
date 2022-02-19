export type ActionType = 'CREATED' | 'EDITED' | 'NONE';

export interface UpdateChecklist {
  id:                       string;
  farm_name:                string,
  farm_city:                string,
  farmer_name:              string,
  supervisor_name:          string,
  number_of_cows_head:      number,
  amount_of_milk_produced:  number,
}

export interface ChecklistRealmFormat {
  id:                       string;
  type:                     string;
  amount_of_milk_produced:  number,
  number_of_cows_head:      number,
  had_supervision:          boolean,
  farm_name:                string;
  farm_city:                string;
  farmer_name:              string;
  supervisor_name?:         string,
  is_sync:                  boolean;
  action_type:              ActionType;
  created_at:               string;
  updated_at?:              string;
}

export interface Checklist {
  id:                      string;
  type:                    string;
  amount_of_milk_produced: string;
  number_of_cows_head:     string;
  had_supervision:         boolean;
  farmer:                  Farmer;
  from:                    From;
  to:                      From;
  is_sync?:                boolean;
  action_type?:            ActionType;
  created_at:              string;
  updated_at:              string;
}

interface Farmer {
  name: string;
  city: string;
}

interface From {
  name: string;
}

