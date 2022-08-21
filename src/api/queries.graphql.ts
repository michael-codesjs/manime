

export const GET_CHARACTER = `
  query ($id: Int) {
    Character (id: $id) {
      id
      name {
        full
        native
        alternative
      }
    }
  }
`;