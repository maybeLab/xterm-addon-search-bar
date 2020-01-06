export default {
  more: false,
  nextStart: 19091755,
  text:
    'Branch event\r\nObtained Jenkinsfile from ec10bdf221f6068fb7baf112e663c3167346e12b\r\nRunning in Durability level: MAX_SURVIVABILITY\r\nLoading library alauda-cicd@master\r\nAttempting to resolve master from remote references...\r\n \u003e git --version # timeout=10\r\nusing GIT_ASKPASS to set credentials \r\n \u003e git ls-remote -h https://daniel_morinigo@bitbucket.org/mathildetech/jenkins-shared-library.git # timeout=10\r\nFound match: refs/heads/master revision cd76af1b99b863dfa24453cadf98512e3d4a8c5c\r\nusing credential bitbucket\r\n \u003e git rev-parse --is-inside-work-tree # timeout=10\r\nFetching changes from the remote Git repository\r\n \u003e git config remote.origin.url https://daniel_morinigo@bitbucket.org/mathildetech/jenkins-shared-library.git # timeout=10\r\nFetching without tags\r\nFetching upstream changes from https://daniel_morinigo@bitbucket.org/mathildetech/jenkins-shared-library.git\r\n \u003e git --version # timeout=10\r\nusing GIT_ASKPASS to set credentials \r\n \u003e git fetch --no-tags --progress https://daniel_morinigo@bitbucket.org/mathildetech/jenkins-shared-library.git +refs/heads/*:refs/remotes/origin/*\r\nChecking out Revision cd76af1b99b863dfa24453cadf98512e3d4a8c5c (master)\r\n \u003e git config core.sparsecheckout # timeout=10\r\n \u003e git checkout -f cd76af1b99b863dfa24453cadf98512e3d4a8c5c\r\nCommit message: "Merged in fix/not-pr-bug (pull request #64)"\r\n \u003e git rev-list --no-walk e7678bb99ed1671d08cd0bbf2acb91aa80b9337f # timeout=10\r\n[Bitbucket] Notifying commit build result\r\n[Pipeline] Start of Pipeline\r\n[Pipeline] node\r\nStill waiting to schedule task\r\nAll nodes of label ‘chromenew’ are offline\r\nAgent chromenew-3lgsn is provisioned from template Kubernetes Pod Template\r\nAgent specification [Kubernetes Pod Template] (chromenew): \r\n* [jnlp] index.alauda.cn/alaudaorg/jnlp-slave:v0.1.13(resourceRequestCpu: 200m, resourceRequestMemory: 256Mi)\r\n* [chrome] index.alauda.cn/alaudaorg/builder-nodejs:10-stretch-chrome(resourceRequestCpu: 1, resourceRequestMemory: 3072Mi, resourceLimitCpu: 2, resourceLimitMemory: 5120Mi)\r\n* [tools] index.alauda.cn/alaudaorg/builder-tools:ubuntu-v2.2-b.1(resourceRequestCpu: 200m, resourceRequestMemory: 512Mi)\r\n* [golang] index.alauda.cn/alaudaorg/builder-go:1.12-ubuntu-v0.1.7\r\n\r\nRunning on chromenew-3lgsn in /home/jenkins/workspace/_devops-diablo-clone_release-2.1\r\n[Pipeline] {\r\n[Pipeline] withEnv\r\n[Pipeline] {\r\n[Pipeline] stage\r\n[Pipeline] { (Checkout)\r\n[Pipeline] script\r\n[Pipeline] {\r\n[Pipeline] dir\r\nRunning in /home/jenkins/workspace/_devops-diablo-clone_release-2.1\r\n[Pipeline] {\r\n[Pipeline] container\r\n[Pipeline] {\r\n[Pipeline] withCredentials\r\nMasking supported pattern matches of $PROXY_ADDRESS_PASS or $PROXY_ADDRESS\r\n[Pipeline] {\r\n[Pipeline] }\r\n[Pipeline] // withCredentials\r\n[Pipeline] sh\r\n+ git config --global http.proxy http://devops-proxy.alaudacloud.cn:8787\r\n[Pipeline] retry\r\n[Pipeline] {\r\n[Pipeline] checkout\r\nusing credential global-credentials-devops-bitbucket1\r\nCloning the remote Git repository\r\nUsing shallow clone\r\nHonoring refspec on initial clone\r\nCloning repository https://bitbucket.org/mathildetech/diablo-clone.git\r\n \u003e git init /home/jenkins/workspace/_devops-diablo-clone_release-2.1 # timeout=10\r\nFetching upstream changes from https://bitbucket.org/mathildetech/diablo-clone.git\r\n \u003e git --version # timeout=10\r\nusing GIT_ASKPASS to set credentials global-credentials-devops-bitbucket1\r\n \u003e git fetch --tags --progress https://bitbucket.org/mathildetech/diablo-clone.git +refs/heads/release-2.1:refs/remotes/origin/release-2.1 --depth=1\r\n \u003e git config remote.origin.url https://bitbucket.org/mathildetech/diablo-clone.git # timeout=10\r\n \u003e git config --add remote.origin.fetch +refs/heads/release-2.1:refs/remotes/origin/release-2.1 # timeout=10\r\n \u003e git config remote.origin.url https://bitbucket.org/mathildetech/diablo-clone.git # timeout=10\r\nFetching upstream changes from https://bitbucket.org/mathildetech/diablo-clone.git\r\nusing GIT_ASKPASS to set credentials global-credentials-devops-bitbucket1\r\n \u003e git fetch --tags --progress https://bitbucket.org/mathildetech/diablo-clone.git +refs/heads/release-2.1:refs/remotes/origin/release-2.1 --depth=1\r\nChecking out Revision ec10bdf221f6068fb7baf112e663c3167346e12b (release-2.1)\r\nCommit message: "Merged in chore/sonarQubeIssue-2.1 (pull request #189)"\r\n \u003e git config core.sparsecheckout # timeout=10\r\n \u003e git checkout -f ec10bdf221f6068fb7baf112e663c3167346e12b\r\n \u003e git rev-list --no-walk 7b85fe31c5789a569d2ac4dd77839da210407e65 # timeout=10\r\n[Pipeline] }\r\n[Pipeline] // retry\r\n[Pipeline] sh\r\n+ rm /home/jenkins/.kube/config\r\nrm: cannot remove \'/home/jenkins/.kube/config\': No such file or directory\r\n[Pipeline] sh\r\n+ rm /home/jenkins/.kube/config\r\nrm: cannot remove \'/home/jenkins/.kube/config\': No such file or directory\r\n[Pipeline] sh\r\n+ gitversion patch v2.1\r\n[Pipeline] echo\r\n\r\n\t\t\t\t\t\t\t\trelease v2.1\r\n\t\t\t\t\t\t\t\tversion v2.1.31\r\n\t\t\t\t\t\t\t\tis_release true\r\n\t\t\t\t\t\t\t\tis_build false\r\n\t\t\t\t\t\t\t\tis_master false\r\n\t\t\t\t\t\t\t\tdeploy_env \r\n\t\t\t\t\t\t\t\t// auto_test false\r\n\t\t\t\t\t\t\t\tenvironment \r\n\t\t\t\t\t\t\t\tmajorVersion v2.1\r\n\t\t\t\t\t\t\t\trelease.change [branch:, url:, target:, title:, id:, desc:]\r\n\t\t\t\t\t\t\t\r\n[Pipeline] sh\r\n+ cp /usr/local/bin/kubectl .\r\n[Pipeline] }\r\n[Pipeline] // container\r\n[Pipeline] }\r\n[Pipeline] // dir\r\n[Pipeline] }\r\n[Pipeline] // script\r\n[Pipeline] }\r\n[Pipeline] // stage\r\n[Pipeline] stage\r\n[Pipeline] { (Base build)\r\n[Pipeline] parallel\r\n[Pipeline] { (Branch: Build frontend)\r\n[Pipeline] { (Branch: Build backend)\r\n[Pipeline] stage\r\n[Pipeline] { (Build frontend)\r\n[Pipeline] stage\r\n[Pipeline] { (Build backend)\r\n[Pipeline] script\r\n[Pipeline] {\r\n[Pipeline] script\r\n[Pipeline] {\r\n[Pipeline] dir\r\nRunning in /home/jenkins/workspace/_devops-diablo-clone_release-2.1\r\n[Pipeline] {\r\n[Pipeline] dir\r\nRunning in /home/jenkins/workspace/_devops-diablo-clone_release-2.1\r\n[Pipeline] {\r\n[Pipeline] container\r\n[Pipeline] {\r\n[Pipeline] dir\r\nRunning in /home/jenkins/workspace/_devops-diablo-clone_release-2.1/src/backend\r\n[Pipeline] {\r\n[Pipeline] sh\r\n[Pipeline] container\r\n[Pipeline] {\r\n[Pipeline] sh\r\n+ yarn install\r\nyarn install v1.13.0\r\n[1/4] Resolving packages...\r\n[2/4] Fetching packages...\r\n+ make build\r\nGO111MODULE=on GOPROXY=https://athens.acp.alauda.cn CGO_ENABLED=0 GOOS=linux go build -ldflags "-w -s" -v -o /home/jenkins/workspace/_devops-diablo-clone_release-2.1/src/backend/dist/backend\r\ngo: finding github.com/docker/spdystream v0.0.0-20181023171402-6480d4af844c\r\ngo: finding bitbucket.org/mathildetech/devops-apiserver v0.0.0-20190717030109-180c0f0d6d72\r\nFetching https://athens.acp.alauda.cn/github.com/docker/spdystream/@v/v0.0.0-20181023171402-6480d4af844c.info\r\ngo: finding github.com/opencontainers/go-digest v1.0.0-rc1\r\ngo: finding gopkg.in/igm/sockjs-go.v2 v2.0.0\r\nFetching https://athens.acp.alauda.cn/github.com/opencontainers/go-digest/@v/v1.0.0-rc1.info\r\ngo: finding github.com/go-openapi/spec v0.19.0\r\nFetching https://athens.acp.alauda.cn/github.com/go-openapi/spec/@v/v0.19.0.info\r\nFetching https://athens.acp.alauda.cn/gopkg.in/igm/sockjs-go.v2/@v/v2.0.0.info\r\ngo: finding github.com/jinzhu/now v1.0.0\r\nFetching https://athens.acp.alauda.cn/github.com/jinzhu/now/@v/v1.0.0.info\r\ngo: finding github.com/emicklei/go-restful-openapi v1.0.0\r\nFetching https://athens.acp.alauda.cn/github.com/emicklei/go-restful-openapi/@v/v1.0.0.info\r\ngo: finding github.com/juju/errors v0.0.0-20190207033735-e65537c515d7\r\ngo: finding github.com/gogo/protobuf v1.2.1\r\nFetching https://athens.acp.alauda.cn/github.com/juju/errors/@v/v0.0.0-20190207033735-e65537c515d7.info\r\ngo: finding sigs.k8s.io/controller-runtime v0.1.10\r\nFetching https://athens.acp.alauda.cn/sigs.k8s.io/controller-runtime/@v/v0.1.10.info\r\nFetching https://athens.acp.alauda.cn/bitbucket.org/mathildetech/devops-apiserver/@v/v0.0.0-20190717030109-180c0f0d6d72.info\r\nFetching https://athens.acp.alauda.cn/github.com/gogo/protobuf/@v/v1.2.1.info\r\nFetching https://athens.acp.alauda.cn/sigs.k8s.io/controller-runtime/@v/v0.1.10.mod\r\nFetching https://athens.acp.alauda.cn/github.com/gogo/protobuf/@v/v1.2.1.mod\r\nFetching https://athens.acp.alauda.cn/github.com/go-openapi/spec/@v/v0.19.0.mod\r\nFetching https://athens.acp.alauda.cn/gopkg.in/igm/sockjs-go.v2/@v/v2.0.0.mod\r\nFetching https://athens.acp.alauda.cn/github.com/juju/errors/@v/v0.0.0-20190207033735-e65537c515d7.mod\r\nFetching https://athens.acp.alauda.cn/github.com/docker/spdystream/@v/v0.0.0-20181023171402-6480d4af844c.mod\r\nFetching https://athens.acp.alauda.cn/github.com/opencontainers/go-digest/@v/v1.0.0-rc1.mod\r\nFetching https://athens.acp.alauda.cn/github.com/jinzhu/now/@v/v1.0.0.mod\r\nFetching https://athens.acp.alauda.cn/github.com/emicklei/go-restful-openapi/@v/v1.0.0.mod\r\nFetching https://athens.acp.alauda.cn/bitbucket.org/mathildetech/devops-apiserver/@v/v0.0.0-20190717030109-180c0f0d6d72.mod\r\ngo: finding golang.org/x/oauth2 v0.0.0-20190604053449-0f29369cfe45\r\nFetching https://athens.acp.alauda.cn/golang.org/x/oauth2/@v/v0.0.0-20190604053449-0f29369cfe45.info\r\ngo: finding github.com/franela/goblin v0.0.0-20181003173013-ead4ad1d2727\r\nFetching https://athens.acp.alauda.cn/github.com/franela/goblin/@v/v0.0.0-20181003173013-ead4ad1d2727.info\r\ngo: finding github.com/pmezard/go-difflib v1.0.0\r\nFetching https://athens.acp.alauda.cn/github.com/pmezard/go-difflib/@v/v1.0.0.info\r\ngo: finding istio.io/api v0.0.0-20181201011059-a4f4a1ff6ffa\r\nFetching https://athens.acp.alauda.cn/istio.io/api/@v/v0.0.0-20181201011059-a4f4a1ff6ffa.info\r\ngo: finding k8s.io/heapster v1.5.4\r\nFetching'
};
