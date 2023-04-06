const validator = (input) => {
  const errors = {};

  const nameRegex = /^[a-zA-Z]+$/;
  const urlRegex =
    /^((http|https):\/\/)?[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,6}(\/.*)?$/;
  const numberRegex = /^(100|[1-9][0-9]|[1-9])$/;

  if (!input.name) errors.name = "Your Pokemon needs a name!";
  if (!nameRegex.test(input.name))
    errors.name = "Your Pokemon needs a valid name!";

  if (!input.hp) errors.hp = "Your Pokemon needs some hp!";
  if (!numberRegex.test(input.hp))
    errors.hp = "Enter a value between 1 and 100";

  if (!input.attack) errors.attack = "Your Pokemon needs some attack power!";
  if (!numberRegex.test(input.attack))
    errors.attack = "Enter a value between 1 and 100";

  if (!input.defense) errors.defense = "Your Pokemon needs some defenses!";
  if (!numberRegex.test(input.defense))
    errors.defense = "Enter a value between 1 and 100";

  if (!input.speed) errors.speed = "Your Pokemon needs to have a speed!";
  if (!numberRegex.test(input.speed))
    errors.speed = "Enter a value between 1 and 100";

  if (!input.height) errors.height = "Your Pokemon needs to have some height!";
  if (input.height > 1000) errors.height = "Your Pokemon can't be so tall!";

  if (!input.weight) errors.weight = "Your Pokemon needs to have some weight!";
  if (input.weight > 2000) errors.height = "Your Pokemon can't be so heavy!";

  if (!input.image) errors.image = "Your Pokemon needs an image URL!";
  if (!urlRegex.test(input.image)) errors.image = "Enter a valid URL!";

  if (!input.types || input.types.length === 0) {
    errors.types = "Your Pokemon needs at least one type!";
  }

  return errors;
};

export default validator;
