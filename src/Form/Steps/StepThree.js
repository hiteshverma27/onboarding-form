function StepThree({ setFormData, formData }) {
  return (
    <div>
      <div className="usertpe-card-container">
        <div
          className={`usertype-card ${
            formData.userType === "individual" && "usertype-card-active"
          }`}
          onClick={() => setFormData({ ...formData, userType: "individual" })}
        >
          <img
            src={require("../../assets/individual.png")}
            style={{ height: "30px", width: "30px" }}
          />
          <p style={{ fontWeight: "bolder", margin: "0.5rem 0" }}>for myself</p>
          <p style={{ margin: "0" }}>
            {" "}
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div
          className={`usertype-card ${
            formData.userType === "team" && "usertype-card-active"
          }`}
          onClick={() => setFormData({ ...formData, userType: "team" })}
        >
          <img
            src={require("../../assets/team.png")}
            style={{ height: "30px", width: "30px" }}
          />
          <p style={{ fontWeight: "bolder", margin: "0.5rem 0" }}>
            With my team
          </p>
          <p style={{ margin: "0" }}>
            {" "}
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
export { StepThree };
