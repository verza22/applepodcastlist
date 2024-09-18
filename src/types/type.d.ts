type AppAction = {
  type: string
  payload: any
}

type Episode = {
  id: string
  title: string
  description: string
  releaseDate: string
  trackTimeMillis: number
  urlPodcast: string
}

type Podcast = {
  id: string
  title: string
  description: string
  image: string
  author: string
  episodesNumber: number
  episodes: Episode[]
}