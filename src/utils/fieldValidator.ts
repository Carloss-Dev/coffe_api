export function fieldValidator(
  requiredFields: string[],
  receveidFields: unknown
) {
  if (
    typeof receveidFields === "object" &&
    !Array.isArray(receveidFields) &&
    receveidFields
  ) {
    const receveidFieldsAtt = Object.keys(receveidFields);

    const invalidFields = receveidFieldsAtt.filter(
      (field) => !requiredFields.includes(field)
    );

    return invalidFields;
  }

  return undefined;
}
