/************TYPE INSERTION************/

const input = document.getElementById('input-field') as HTMLInputElement;

// Input values can only be accessed if type insertion is defined

input.value;

/*********VERY REAR SITUATION WHERE TYPE INSERTION CAN BE ASSIGNED DIFFERENT TYPE*********/

// Now HTML element is converted to any TYPE and then to STRING type.
const inputField = document.getElementById('input-field') as any as string;
