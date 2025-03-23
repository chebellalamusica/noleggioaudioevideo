import Layout from '../components/layout/Layout'
import PEdilizie from '../components/sections/PEdilizie'
import Rilievidrone from '../components/sections/Rilievidrone'
import ContactForm from '../components/sections/ContactForm'

export default function Home() {
  return (
    <Layout>
      <PEdilizie />
      <Rilievidrone />
      <ContactForm />
    </Layout>
  )
}