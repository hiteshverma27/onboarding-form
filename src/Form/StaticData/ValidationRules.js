const validationRules = {
  fullName: (value) => value.trim().length >= 2,
  displayName: (value) => value.trim().length >= 2,
  workspaceName: (value) => value.trim().length >= 2,
  userType: (value) => value,
};

export { validationRules };
