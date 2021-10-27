#!/usr/bin/env bash
set -eux
directory="generated"
if [[ -d $directory ]]; then
  rm -rf $directory
fi
mkdir $directory

git submodule update --init --force --recursive proto

npx grpc_tools_node_protoc \
  --ts_proto_out=./$directory \
  --ts_proto_opt=outputServices=grpc-js,esModuleInterop=true,outputTypeRegistry=true \
  -I ./proto/ -I ./proto/third_party/googleapis \
  $(find proto/yandex -iname "*.proto")

(
  cd scripts
  npx tsc -b tsconfig.json

  node apiGenerator.js

  npx prettier "../api/**/*.ts" -w
)
