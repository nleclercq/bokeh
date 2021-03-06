declare namespace Bokeh {
  export interface LayoutDOM extends Model, ILayoutDOM {}
  export interface ILayoutDOM extends IModel {
    width?: Int;
    height?: Int;
    disabled?: boolean;
    sizing_mode?: SizingMode;
  }

  export const Spacer: {
    new(attributes?: ISpacer, options?: ModelOpts): Spacer;
  }
  export interface Spacer extends LayoutDOM {}
  export interface ISpacer extends ILayoutDOM {}

  export interface Box extends LayoutDOM, IBox {}
  export interface IBox extends ILayoutDOM {
    children?: LayoutDOM[];
  }

  export const Row: {
    new(attributes?: IRow, options?: ModelOpts): Row;
  }
  export interface Row extends Box {}
  export interface IRow extends IBox {}

  export const Column: {
    new(attributes?: IColumn, options?: ModelOpts): Column;
  }
  export interface Column extends Box {}
  export interface IColumn extends IBox {}
}
