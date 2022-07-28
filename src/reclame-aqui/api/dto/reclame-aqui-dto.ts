import { DTO } from "../../../domain/dto";

class ReclameAquiDTO implements DTO {
  readonly "Nota do Reclame Aqui": number;
  readonly "Nota do consumidor": number;
  readonly "Reclamações": number;
  readonly "Respondidas": number;
  readonly "Voltariam a fazer negócio": number;
  readonly "Índice de solução": number;
}

export { ReclameAquiDTO };
