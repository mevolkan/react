import { useQuery, gql } from '@apollo/client';


const GET_CATEGORIES = gql`
{
    categories{
      name
    }
  }
`;



function Menu() {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data.categories)

    // return data.categories.map( (name)=>(
    //     <a href='/#'>{name}</a>
    // ) );
}

export default Menu;
