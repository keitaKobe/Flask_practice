from flask import Flask, render_template
import requests
import pandas as pd

# teams_name = ['Arsenal', 'AstonVilla', 'Bournemouth', 'Brentford', 'Brighton',
#               'Burnley', 'Chelsea', 'Crystal', 'Everton', 'Fulham',
#               'Liverpool', 'Luton', 'ManCity', 'ManUnited', 'Newcastle',
#               'NotForest', 'Sheffield', 'Tottenham', 'WestHam', 'Wolves' ]



print(__name__)
app = Flask(__name__)



@app.route("/")
def main_page():
    return render_template('index.html')


@app.route("/map")
def map_page():
    return render_template('map.html')


@app.route("/teams")
def teams_page():
    return render_template('teams.html')



@app.route("/ranking")
def ranking_page():
    
    uri = 'https://api.football-data.org/v4/competitions/PL/standings'
    headers = { 'X-Auth-Token': 'API_key' }    #ここにAPIキーを入力 

    response = requests.get(uri, headers=headers)
    data = response.json()['standings']
    
    # 順位表のデータを取得
    table_data = data[0]['table']

    # データフレームを作成
    df_table = pd.DataFrame(table_data)

    df_table = df_table.drop(['form'], axis=1)

    

    team_name = []
    for table in table_data:
        team_name.append(table['team']['name'])
        # print(table['team']['name'])

    df_name = pd.DataFrame(team_name, columns=['team'])

    df_table['team'] = df_name['team']

    df_table.set_index('position', inplace=True, drop=True)
    df_table.index.name = None
    df_table.columns = ['チーム名', '試合数', '勝', '分', '負', '勝ち点', '得点', '失点', '差']

    return render_template('ranking.html', table=df_table.to_html(classes='table table-striped'))




@app.route("/news")
def news_page():
    return render_template('news.html')

@app.route('/team/<team_name>')
def team_page(team_name):
    html = f'team/{team_name}.html'
    return render_template(html)



if __name__ == "__main__":
    app.run()