function renderUsers(users) {
    document.write('<div class="users-box">');

    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        document.write(`
      <div class="user-block">
        <h2>${user.id} – ${user.name} – ${user.username}</h2>
        <h3>${user.email} – ${user.phone}</h3>
        <div class="address-block">
          <p>City – ${user.address.city}</p>
          <p>Street – ${user.address.street}</p>
          <p>Suite – ${user.address.suite}</p>
          <p>Zip code – ${user.address.zipcode}</p>
        </div>
      </div>
    `);
    }

    document.write('</div>');
}

renderUsers(usersList)


