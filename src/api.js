import Vue from 'vue'

export function getAuth() {
    return Vue.http.get('api/auth')
}

export function getViz(path) {
    return Vue.http.get('api/viz', {
        params: {
            path: path
        }
    })
}

export function getReport(path, pcList, genReport) {
    return Vue.http.post('api/ssrs', {
            Path: path,
            ParameterControlList: pcList,
            GenReport: genReport
        }
    )
}


