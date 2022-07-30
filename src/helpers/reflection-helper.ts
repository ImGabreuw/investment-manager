import { RegisterSearchSteps } from "../domain/steps-service";

class ReflectionHelper {
  private constructor() {}

  static isImplementsRegisterSearchSteps(
    object: any
  ): object is RegisterSearchSteps {
    return object.registerSearchSteps !== undefined;
  }
}

export { ReflectionHelper };
