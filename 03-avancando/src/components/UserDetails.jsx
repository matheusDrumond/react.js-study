const UserDetails = ({ name, age, job }) => {
  return (
    <div>
        <ul>
            <li>{name}</li>
            <li>Idade: {age}</li>
            <li>Job: {job}</li>
            <li>Pode dirigir? {age >= 18 ? ('Sim') : ('Não')}</li>
        </ul>
    </div>
  )
}

export default UserDetails