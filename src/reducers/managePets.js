export let state;


export function managePets(state = {pets: []}, action){
  console.log(state)
  switch (action.type) {
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]};
    case 'REMOVE_PET':
      return { pets:
        [...state.pets.filter( pet =>
          { return pet.id !== action.id })
        ]
    }
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  document.getElementById("container").innerHTML = "<ul><li>Splash</li></ul>"
}
