export interface UCInputData {

}

export interface UCOutputData {

}

export interface UCCallbacks<R> {
  onSuccess: (result: R) => void;
  onError: (e: Error) => void;
}

export abstract class UseCase<I extends UCInputData, O extends UCOutputData> {
  abstract execute(inputData: I, callbacks: UCCallbacks<O>): void;
}
