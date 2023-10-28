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
      tasks: {
        Row: {
          created_at: string
          description: string | null
          id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
        }
        Relationships: []
      }
      test: {
        Row: {
          created_at: string
          id: string
          msg: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          msg?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          msg?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
