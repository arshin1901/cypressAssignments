export var gNum: number;
export function result(result: string) {
  switch (result) {
    case "1":
        gNum = 0;
      break;
    case "2":
        gNum = 1;
      break;
      case "3":
        gNum = 2;
      break;
    default:
        gNum = 0;
  }
}