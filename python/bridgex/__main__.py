from __future__ import annotations

import os
import subprocess
import sys
from importlib import resources


def _binary_name() -> str:
    return "bridgex.exe" if os.name == "nt" else "bridgex"


def _binary_path() -> str | None:
    try:
        base = resources.files("bridgex")
    except Exception:
        return None

    candidate = base / "bin" / _binary_name()
    if candidate.is_file():
        return str(candidate)
    return None


def main() -> int:
    binary_path = _binary_path()
    if not binary_path:
        print(
            "Bridgex binary not found. "
            "If you are on Linux, download the binary from SourceForge: "
            "https://sourceforge.net/projects/bridgex/",
            file=sys.stderr,
        )
        return 1

    if os.name != "nt":
        try:
            os.chmod(binary_path, os.stat(binary_path).st_mode | 0o111)
        except OSError:
            pass

    return subprocess.call([binary_path, *sys.argv[1:]])


if __name__ == "__main__":
    raise SystemExit(main())
