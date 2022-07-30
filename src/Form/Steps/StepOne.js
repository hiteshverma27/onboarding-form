function StepOne({ setFormData, formData }) {
  return (
      <form className="form">
        <label className="input-label">
          Full Name
          </label>
          <input
            className="input-field"
            required
            type="text"
            placeholder="Steve Jobs"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        <label className="input-label">
          Display Name
          </label>
          <input
            className="input-field"
            required
            type="text"
            placeholder="Steve"
            value={formData.displayName}
            onChange={(e) =>
              setFormData({ ...formData, displayName: e.target.value })
            }
          />
      </form>
  );
}
export { StepOne };
