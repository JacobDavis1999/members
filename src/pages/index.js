import * as React from "react"
import { graphql} from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
query Members {
  allWpJdMember {
    nodes {
      JDTeamMembersFields {
        description
        fieldGroupName
        image {
          altText
        }
        
      }
title
      id
      
    }
  }
}
`;

const IndexPage = ({ data }) => {

const members = data.allWpJdMember.nodes;


return(
<Layout>
    <Seo title="Home" />
   
    <MembersWrapper>
  {members.length && members.map(f => {
    return <MembersCard key={f.id}>
      <Title color="goldenrod">{f.title} 
      </Title>
      <div dangerouslySetInnerHTML ={{__html: f.JDTeamMembersFields.description,}} />

      <div dangerouslySetInnerHTML ={{__html: f.JDTeamMembersFields.image,}} />
      </MembersCard>
  })}
  </MembersWrapper>
  </Layout>
)
}


const MembersWrapper = styled.div`
display: grid;
gap: 1rem;
font-family: " Open Sans";


@media(min-width: 48em){
  grid-template-columns: 1fr 1fr 1fr;
}
`

const MembersCard = styled.div`

border: solid 1px rebeccapurple;
border-radius: 1rem;
padding : 1em;
box-shadow: 0 0 1rem rgba(0,0,0,.15);
`

const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
text-color: rebeccapurple;
`

const Title = styled.h2`
color: ${(props) => props.color};

`


export default IndexPage
