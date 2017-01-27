## Introduction

[Lelylan Dev Center](http://dev.lelylan.com/) site where documentations, examples, libraries, and
showcases related to Lelylan are collected.


## Requirements

Lelylan Dev Center is tested against MRI 1.9.3.


## Installation

```bash
$ git clone git@github.com:lelylan/dev.git && cd dev
$ gem install bundler
$ bundle install
$ foreman start
```

## Install with docker

#### Badges
Docker image: [lelylanlab/devices-dashboard-ng](https://hub.docker.com/r/lelylanlab/dev/)

[![](https://images.microbadger.com/badges/version/lelylanlab/dev:latest.svg)](http://microbadger.com/images/lelylanlab/dev:latest "Get your own version badge on microbadger.com")  [![](https://images.microbadger.com/badges/image/lelylanlab/dev:latest.svg)](http://microbadger.com/images/lelylanlab/dev:latest "Get your own image badge on microbadger.com")

### Use docker hub image
```bash
$ docker run -d -it --name devices-dashboard-ng lelylanlab/dev
```

### Generate local image
```bash
$ docker build --tag=dev .
$ docker run -d -it --name dev dev
```

## Resources

* [Lelylan Dev Center](http://dev.lelylan.com)


## Contributing

Fork the repo on github and send a pull requests with topic branches.


## Usage

* Fork and clone the repository.
* Run `gem install bundler` to get the latest for the gemset.
* Run `bundle install` for dependencies.
* Run `foreman start` for dependencies.


## Guidelines

* Duplicated documentation is not accepted.
* Documentation should be placed in the right section.
* Update the CHANGELOG.


## Feedback

Use the [issue tracker](http://github.com/lelylan/dev/issues) for bugs or [stack overflow](http://stackoverflow.com/questions/tagged/lelylan) for questions.
[Mail](mailto:dev@lelylan.com) or [Tweet](http://twitter.com/lelylan) us for any idea that can improve the project.


## Links

* [GIT Repository](http://github.com/lelylan/dev)
* [Lelylan Dev Center](http://dev.lelylan.com)
* [Lelylan Site](http://lelylan.com)


## Authors

[Andrea Reginato](https://www.linkedin.com/in/andreareginato)


## Contributors

Special thanks to [all people](https://github.com/lelylan/dev/graphs/contributors) helping to make the project real.


## Changelog

See [CHANGELOG](https://github.com/lelylan/dev/blob/master/CHANGELOG.md)


## License

Lelylan is licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
