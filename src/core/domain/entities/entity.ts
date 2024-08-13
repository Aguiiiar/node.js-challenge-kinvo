import crypto from "crypto"

export abstract class Entity<T> {
  protected _id: string
  public props: T;
  constructor(
    props: T, _id?: string
  ) {
    this._id = _id ?? crypto.randomUUID()
    this.props = props
  }

  get id(): string {
    return this._id;
  }
}