describe("petstore api test", () => {
  it("create new user, change user, delete user", () => {
    let userId = 123;
    cy.request("POST", "/user", {
      id: userId,
      username: "IvanP",
      firstName: "Ivan",
      lastName: "Petrov",
      email: "Ivan@mail.ru",
      password: "12345",
      phone: "84957777777",
      userStatus: 0,
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "123",
      });
      cy.request("PUT", "/user/IvanP", {
        id: userId,
        username: "VasyaP",
        firstName: "Vasya",
        lastName: "Petrov",
        email: "Vasya@mail.ru",
        password: "12345",
        phone: "84957777777",
        userStatus: 0,
      }).then((response) => {
        expect(response.body).be.eql({
          code: 200,
          type: "unknown",
          message: "123",
        });
      });
      cy.request("GET", "/user/VasyaP").then((response) => {
        expect(response.body).be.eql({
          id: userId,
          username: "VasyaP",
          firstName: "Vasya",
          lastName: "Petrov",
          email: "Vasya@mail.ru",
          password: "12345",
          phone: "84957777777",
          userStatus: 0,
        });
        cy.request("DELETE", "/user/VasyaP").then((response) => {
          expect(response.status).be.eql(200);
        });
      });
    });
  });
});
