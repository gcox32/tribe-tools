import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Let Me Demo | Tribe Tools </title>
      </Helmet>

      <Container maxWidth="xl">

        <Grid container spacing={3}>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Minutes Worked" total={714000} color="info" icon={'ant-design:clock-circle-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Calories Burned" total={1352831} icon={'ant-design:fire-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Classes Attended" total={1234} color="warning" icon={'ant-design:shop-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Goals Crushed" total={234} color="error" icon={'ant-design:rocket-filled'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Performance"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
              ]}
              chartData={[
                {
                  name: 'Attendance',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Avg Output',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Avg Rank',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Class Profile"
              chartData={[
                { label: 'POWER', value: 4344 },
                { label: 'PUSH', value: 5435 },
                { label: 'PEAK', value: 1443 },
                { label: 'PERFORM', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Franchise Breakdown"
              subheader="Generic Subheader"
              chartData={[
                { label: 'Homewood', value: 400 },
                { label: 'Brentwood', value: 430 },
                { label: 'NOLA', value: 448 },
                { label: 'Highway 280', value: 470 },
                { label: 'Germantown', value: 540 },
                { label: 'Raleigh', value: 580 },
                { label: 'East Memphis', value: 690 },
                { label: 'Charleston', value: 1100 },
                { label: 'Richmond', value: 1200 },
                { label: 'Tampa', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Strengths Profile"
              chartLabels={['Power', 'Strength', 'Endurance', 'Speed', 'Stamina', 'Mobility']}
              chartData={[
                { name: 'You', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Memphis', data: [20, 30, 40, 80, 20, 80] },
                { name: 'ITF', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="My Tribeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Bring-a-Friend Day',
                  'Graduated 101',
                  'First Pull-up',
                  'Ran a Mile Without Stopping',
                  'Bodyweight Snatch',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Upcoming Events"
              subheader="These are all the same because fake data is tedious"
              list={
                [
                  {
                    'id':'00001',
                    'title':'Workout for Water',
                    'description':'Hosted at ITF East Memphis',
                    'image':`/assets/images/covers/cover_1.jpg`,
                    'postedAt':faker.date.past(),
                  },
                  {
                    'id':'00002',
                    'title':'Workout for Water',
                    'description':'Hosted at ITF East Memphis',
                    'image':`/assets/images/covers/cover_2.jpg`,
                    'postedAt':faker.date.recent(),
                  },
                  {
                    'id':'00003',
                    'title':'Workout for Water',
                    'description':'Hosted at ITF East Memphis',
                    'image':`/assets/images/covers/cover_3.jpg`,
                    'postedAt':faker.date.soon(),
                  },
                  {
                    'id':'00004',
                    'title':'Workout for Water',
                    'description':'Hosted at ITF East Memphis',
                    'image':`/assets/images/covers/cover_4.jpg`,
                    'postedAt':faker.date.future(),
                  },
                  {
                    'id':'00005',
                    'title':'Workout for Water',
                    'description':'Hosted at ITF East Memphis',
                    'image':`/assets/images/covers/cover_5.jpg`,
                    'postedAt':faker.date.future(),
                  },
                ]
              }
            />
          </Grid>



          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Goal Tracker"
              list={[
                { id: '1', label: '24-inch Box Jump' },
                { id: '2', label: 'Full-depth Overhead Squat' },
                { id: '3', label: '1 Handstand Push-up' },
                { id: '4', label: 'Run a 5k' },
                { id: '5', label: '1.5 Bodyweight Clean & Jerk' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
