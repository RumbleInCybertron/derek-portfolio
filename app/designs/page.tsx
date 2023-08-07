import Page from "@/app/components/utility/Page";
import Heading from "@/app/components/designs/Heading";
import Designs from "@/app/components/designs/Designs";
import More from "@/app/components/designs/More";

function designs() {
  return (
    <Page
      currentPage="Designs"
      meta={{ desc: "I am also somewhat of a self-taught designer." }}
    >
      <Heading />
      <Designs />
      <More />
    </Page>
  )
}

export default designs;