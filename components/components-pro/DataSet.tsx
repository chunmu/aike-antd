import { ObservableMap, observable, runInAction } from 'mobx';

export interface DataSetProps {
  name?: string;
}

class DataSet {
  static defaultProps: DataSetProps = {};

  name?: string;

  @observable state: ObservableMap<string, any>;

  constructor(props?: DataSetProps) {
    runInAction(() => {});
    const { name } = {
      ...DataSet.defaultProps,
      ...props,
    };
    this.name = name;
    this.state = observable.map<string, any>();
  }

  getState(key: string) {
    return this.state.get(key);
  }
}

export default DataSet;
