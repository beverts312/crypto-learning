from invoke import task


def black(c, check):
    cmd = f"black . --line-length=79 {'--check' if check is True else ''}"
    return c.run(cmd)


@task(aliases=["f"])
def format(c):
    return black(c, False)


@task(aliases=["cf", "fc"])
def check_format(c):
    return black(c, True)


@task(aliases=["l", "lp"])
def lint(c):
    return c.run("pycodestyle .")


@task(aliases=["d"])
def build_diagrams(c):
    with c.cd("arch"):
        return c.run("python infra.py")


@task(aliases=["s"])
def setup_extras(c):
    c.run("brew install graphviz")
    with c.cd("ui"):
        return c.run("npm install")
