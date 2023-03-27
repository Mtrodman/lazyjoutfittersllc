import { useState } from "react";
import './form.css'

function SignUpForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // redirect to login page
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="formbody">
      <h1 className="formtitle">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="formtext">
            <label htmlFor="firstName">First Name</label>
            <input
              required
              value={user.firstName}
              onChange={(e) =>
                setUser({ ...user, firstName: e.target.value })
              }
              className="form-control"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="formtext">
            <label htmlFor="lastName">Last Name</label>
            <input
              required
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              className="form-control"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>
        <div className="row">
          <div className="emailformtext">
            <label htmlFor="email">Email</label>
            <br/>
            <input
                
              type="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="formtext">
            <label htmlFor="password">Password</label>
            <br/>
            <input
            
              type="password"
              required
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              className="form-control"
              id="password"
              name="password"
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Sign Up" />
      </form>
    </main>
  );
}

export default SignUpForm;