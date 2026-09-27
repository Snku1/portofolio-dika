export interface IExperience {
  title: string
  description: string
  company: string
  type: 'work' | 'organization' | 'education'
  uri: string
  logo_uri: string
  date: string
}
