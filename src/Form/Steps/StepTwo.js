function StepTwo({ setFormData, formData }) {
  return (
    <div>
      <form className="form">
        <label className="input-label">Workspace Name</label>
        <input
          className="input-field"
          required
          type="text"
          placeholder="Eden"
          value={formData.workspaceName}
          onChange={(e) =>
            setFormData({ ...formData, workspaceName: e.target.value })
          }
        />
        <label className="input-label">
          Workspace URL <span>(optional)</span>
        </label>

        <div className="workspaceurl-wrapper">
          <div
            className="workspace-domain"
          >
            www.eden.com/
          </div>
          <input
            className="input-field workspaceurl-input"
            type="text"
            placeholder="Example"
            value={formData.workspaceURL}
            onChange={(e) =>
              setFormData({ ...formData, workspaceURL: e.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
}
export { StepTwo };
