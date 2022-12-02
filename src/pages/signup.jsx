export default function Signup () {
    return (
      <div className="background">
        <form className="signup">
          <label htmlFor="username">Username:</label>
          <input name="username"></input>
          <label htmlFor="password">Password:</label>
          <input name="password"></input>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input name="confirmPassword"></input>
        </form>
      </div>
    );
  }
  