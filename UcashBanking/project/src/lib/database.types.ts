export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      transactions: {
        Row: {
          id: string
          user_id: string
          amount: number
          description: string
          category: string
          transaction_type: 'EXPENSE' | 'INCOME' | 'TRANSFER'
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          description: string
          category: string
          transaction_type: 'EXPENSE' | 'INCOME' | 'TRANSFER'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          description?: string
          category?: string
          transaction_type?: 'EXPENSE' | 'INCOME' | 'TRANSFER'
          created_at?: string
        }
      }
      budgets: {
        Row: {
          id: string
          user_id: string
          category: string
          amount: number
          month: string
        }
        Insert: {
          id?: string
          user_id: string
          category: string
          amount: number
          month: string
        }
        Update: {
          id?: string
          user_id?: string
          category?: string
          amount?: number
          month?: string
        }
      }
      accounts: {
        Row: {
          id: string
          user_id: string
          account_number: string
          balance: number
          account_type: string
          is_active: boolean
        }
        Insert: {
          id?: string
          user_id: string
          account_number: string
          balance: number
          account_type: string
          is_active?: boolean
        }
        Update: {
          id?: string
          user_id?: string
          account_number?: string
          balance?: number
          account_type?: string
          is_active?: boolean
        }
      }
    }
  }
}