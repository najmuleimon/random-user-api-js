const users = () => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => showUsers(data.results))
}
users()

const showUsers = users => {
    const allUser = document.getElementById('all-user')

    users.forEach(user => {
        const div = document.createElement('div')
        div.classList.add('col-md-6')
        div.innerHTML = `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${user.picture.medium}" class="img-fluid rounded-start" alt="...">
                    <div>
                        <h5>Id: ${user.id?.name}</h5>
                        <h5>Value: ${user.id?.value}</h5>
                        <h4>Login Info</h4>
                        <p>UUID: ${user.login.md5}</p>
                        <p>Username: ${user.login.username}</p>
                        <p>Password: ${user.login.password}</p>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
                        <h4>Email: ${user.email}</h4>
                        <h6>Gender: ${user.gender}</h6>
                        <h6>Age: ${user.dob.age}</h6>
                        <h6>Birth Date: ${user.dob.date}</h6>
                        <p class="card-text">Cell: ${user.cell}</p>
                        <p class="card-text">Location: ${user.location.street.name} - ${user.location.street.number}, ${user.location.state}, ${user.location.city}, 
                        ${user.location.country} - ${user.location.postcode}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        allUser.appendChild(div)
    });
}