
// famous person component

function FamousPerson(props) {


    return (
        <div id="famous-person">
            <li key={props.person.id}>{props.person.name} plays the role of {props.person.role}</li>
        </div>
    )
}
export default FamousPerson;