
// Famous List component
import FamousPerson from '../FamousPerson/FamousPerson.jsx';

function FamousList(props) {



    return (
        <div id="famous-list">
            <ul>

                {props.famousPeopleArray.map((person) => {

                    return (
                        <FamousPerson key={person.id} person={person}/>
                    );
                })
                } 
            </ul>
        </div>
    )
}

export default FamousList;